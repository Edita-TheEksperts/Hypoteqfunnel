import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get('file') as File | null;
    const name = file?.name || 'upload.dat';
    const fakeUrl = `/uploads/${Date.now()}_${Math.random().toString(16).slice(2,10)}_${name}`;
    return NextResponse.json({ ok: true, fileName: name, url: fakeUrl });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Upload failed' }, { status: 400 });
  }
}