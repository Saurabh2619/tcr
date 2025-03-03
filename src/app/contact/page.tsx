export default function Contact() {
  const imageUrl =
    "https://ptsinabocgqagjnqykgy.supabase.co/storage/v1/object/public/pic%20upload//Devil%20TF.jpg"; // Replace with your actual URL

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
      <p>Here is the uploaded image:</p>
      <img src={imageUrl} alt="Uploaded" className="w-40 h-40 object-cover border rounded" />
    </div>
  );
}
