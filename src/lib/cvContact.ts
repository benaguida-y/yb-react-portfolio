export type CVContact = {
  phone: string

  email: string

  linkedin: {
    value: string;
    display: string;
  };

  website: {
    value: string;
    display: string;
  };

  location: {
    value: string;
    label: {
      en: string;
      fr: string;
    };
  };
};


// OR YOU CAN PUT THIS ALONE.
// export const cvContacts = {
//   phone: "+212607292997",
//   email: "yns.benaguida@gmail.com",
//   linkedin: "https://www.linkedin.com/in/x",
//   website: "",
//   location: {
//     en: "Casablanca, MA",
//     fr: "Casablanca, MA"
//   }
// };


export const cvContacts: CVContact = {
  phone: "+212607292997",

  email: "yns.benaguida@gmail.com",

  linkedin: {
    value: "https://www.linkedin.com/in/youness-benaguida-ynsben",
    display: "Youness Benaguida"
  },

  website: {
    value: "",
    display: "Soon"
  },

  location: {
    value: "https://www.google.com/maps/place/Casablanca/@33.5722875,-7.5869925,11z/data=!3m1!4b1!4m6!3m5!1s0xda7cd4778aa113b:0xb06c1d84f310fd3!8m2!3d33.5731104!4d-7.5898434!16zL20vMDIyYl8?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
    label: {
      en: "Casablanca, MA",
      fr: "Casablanca, MA"
    }
  }
};

