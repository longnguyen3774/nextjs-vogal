import { unstable_noStore as noStore } from "next/cache";

interface ReviewData {
  name: string;
  email: string;
  review_title: string;
  body_of_review: string;
}

export async function fetchData(product_id: string) {
  noStore();
  try {
    const fetchResponse = await fetch(
      `http://127.0.0.1:8000/products/${product_id}`
    );

    const data = await fetchResponse.json();

    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchReview(reviewData : ReviewData) {
  console.log(JSON.stringify(reviewData));
  try {
    // Send form data to the server using the Fetch API
    const response = await fetch("http://127.0.0.1:8000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
