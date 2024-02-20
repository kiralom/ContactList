import { useEffect, useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [singleContact, setSingleContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setSingleContact(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);
  return (
    <>
      {singleContact === null ? (
        <div>Loading . . . </div>
      ) : (
        <div>
          <p>{singleContact.name}</p>
          <p>{singleContact.email}</p>
          <p>{singleContact.phone}</p>
          <p>{singleContact.website}</p>
          <button onClick={() => setSelectedContactId(null)}>
            Back to List
          </button>
        </div>
      )}
    </>
  );
}
