import { NextResponse } from 'next/server';
import clientPromise from "../../lib/mongodb"

export async function POST(request) {
  try {
    const data = await request.json();
    const { yourName, categoryOfTheTool, titleOfTheIdea, detailedIdea } = data;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('honeycomb'); 
    const collection = db.collection('ideas'); 

    // Insert the form data into MongoDB
    await collection.insertOne({
      yourName,
      categoryOfTheTool,
      titleOfTheIdea,
      detailedIdea,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Idea submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ message: 'Error submitting idea' }, { status: 500 });
  }
}
