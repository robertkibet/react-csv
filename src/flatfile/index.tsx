import { FlatfileButton } from "@flatfile/react";


const FlatFile = () => {

  return (
    <FlatfileButton
      licenseKey="4da10a52-027e-4e62-a1e0-325c669bd5c5" // license trial test key
      customer={{ userId: "12345" }}
      settings={{
        type: "Contact",
        fields: [
          {
            label: "Email", key: "email",
            validators: [
              {
                validate: "regex_matches",
                regex: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
                error:
                  "Invalid email address"
              }
            ]
          },
          {
            label: "Phone", key: "phone",
            validators: [
              {
                validate: "regex_matches",
                regex: "^0(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$",
                error:
                  "Invalid phone number"
              }
            ]
          }
        ],
        managed: true
      }}
      onData={async (results) => {
        // do something with the results
        console.log(results.data)
        return "Done!";
      }}
    >
      Import Contacts
    </FlatfileButton>
  )
}

export default FlatFile;