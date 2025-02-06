import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import config from '@/lib/config';

export async function POST() {
  try {
    const session = await auth();
    const refreshToken = session?.user?.refreshToken;

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, message: 'No refresh token found' },
        { status: 401 }
      );
    }

    // Call your backend logout endpoint with the refreshToken in the headers
    const response = await fetch(
      `${config.env.apiEndpoint}/auth/logout`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to logout from backend');
    }

    return NextResponse.json({
      success: true,
      message: 'Logged out',
    });
  } catch (error) {
    console.error('Backend logout failed:', error);
    return NextResponse.json(
      { success: false, message: 'Logout failed' },
      { status: 500 }
    );
  }
}
