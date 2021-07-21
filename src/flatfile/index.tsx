import { FlatfileButton } from "@flatfile/react";

const FlatFile = () => {

  return (
    <FlatfileButton
      licenseKey="4da10a52-027e-4e62-a1e0-325c669bd5c5" // license trial test key
      customer={{ userId: "12345" }}
      settings={{
        type: "Contact",
        fields: [
          { label: "Email", key: "email" },
          { label: "Phone", key: "phone" }
        ],
        managed: true
      }}
      onData={async (results) => {
        // do something with the results
        console.log(results)
        return "Done!";
      }}
    >
      Import Contacts
    </FlatfileButton>
  )
}

export default FlatFile;