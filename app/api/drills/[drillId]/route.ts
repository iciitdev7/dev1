import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/api-auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { drillId: string } }
) {
  try {
    const { user, error: authError, supabase } = await getAuthenticatedUser(request);

    if (authError || !supabase) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Authentication token is missing or invalid', status_code: 401 },
        { status: 401 }
      );
    }

    const { drillId } = params;

    const { data: drill, error } = await supabase
      .from('drills')
      .select('*')
      .eq('id', drillId)
      .eq('is_active', true)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { error: 'Internal Server Error', message: error.message, status_code: 500 },
        { status: 500 }
      );
    }

    if (!drill) {
      return NextResponse.json(
        { error: 'Not Found', message: 'The requested resource does not exist', status_code: 404 },
        { status: 404 }
      );
    }

    return NextResponse.json(drill);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: 'An unexpected error occurred', status_code: 500 },
      { status: 500 }
    );
  }
}
