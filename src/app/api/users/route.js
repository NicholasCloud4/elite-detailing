import { query } from '../../../lib/db';

export async function POST(req) {
    const { name, email } = await req.json();

    try {
        const result = await query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return new Response(JSON.stringify(result.rows[0]), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Database error', error }), { status: 500 });
    }
}