import connect from '@/utils/db';
import {NextResponse} from 'next/server';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export const POST = async (request) => {
	const {name, email, password} = await request.json();
	try{
		await connect();
		const hashedPassword = await bcrypt.hash(password, 5);
		const newUser = new User({
			name,
			email,
			password: hashedPassword
		});
		await newUser.save();
		return new NextResponse("User has been created.", {status: 201});
	} catch(error){
		return new NextResponse(error.message, {status: 500});
	}
};
