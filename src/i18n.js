import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        services: "Services",
        applications: "Applications",
        support: "Support",
        "support.designTips": "Design Tips",
        "support.templates": "Templates",
        "support.faq": "FAQ",
        contact: "Contact",
        language: "Language",
        addressDetails:"Karaiskaki 215, Patras, Greece",
        brand: "ATELIER ANADELTA",
        home: {
          hero: {
            title: "Bringing ideas to life",
            subtitle: "Welcome to Atelier Anadelta, where creativity and craftsmanship unite to create custom designs that inspire.",
            cta: "Contact us",
            cta2: "Visit our shop"
          },
          banner: {
            text: "Discover Our Designs"
          }
        },
        contactPage: {
          hero: {
            title: "Let's Connect",
            subtitle: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          },
          form: {
            title: "Send us a Message",
            name: "Name",
            namePlaceholder: "Your name",
            email: "Email",
            emailPlaceholder: "Your email",
            subject: "Subject",
            subjectPlaceholder: "What is this about?",
            message: "Message",
            messagePlaceholder: "Tell us about your project or inquiry...",
            submit: "Send Message"
          },
          info: {
            title: "Get in Touch",
            email: "Email",
            phone: "Phone",
            address: "Address",
            hours: "Working Hours",
            weekdays: "Monday - Friday",
            followUs: "Follow Us"
          },
          banner: {
            text: "We're Here to Help"
          }
        },
        footer: {
          companyDescription: "We create unique designs that inspire and turn ideas into reality.",
          quickLinks: "Quick Links",
          services: {
            customDesign: "Custom Design",
            personalisedGifts: "Personalised Gifts",
            prototyping: "Prototyping",
            consulting: "Consulting"
          },
          madeBy: {
            prefix: "Made by",
            suffix: "with"
          },
          copyright: "© 2025 Atelier Anadelta. All rights reserved."
        }
      }
    },
    el: {
      translation: {
        services: "Υπηρεσίες",
        applications: "Εφαρμογές",
        support: "Υποστήριξη",
        "support.designTips": "Συμβουλές Σχεδιασμού",
        "support.templates": "Πρότυπα",
        "support.faq": "Συχνές Ερωτήσεις",
        contact: "Επικοινωνία",
        language: "Γλώσσα",
        addressDetails:"Καραϊσκάκη 215, Πάτρα, Ελλάδα",
        brand: "ATELIER ANADELTA",
        home: {
          hero: {
            title: "Δίνοντας ζωή στις ιδέες",
            subtitle: "Καλώς ήρθατε στο Atelier Anadelta, όπου η δημιουργικότητα και η τεχνογνωσία ενώνονται για να δημιουργήσουν προσαρμοσμένα σχέδια που εμπνέουν.",
            cta: "Επικοινωνήστε μαζί μας",
            cta2: "Επισκεφθείτε το κατάστημά μας"
          },
          banner: {
            text: "Ανακαλύψτε τα Σχέδιά μας"
          }
        },
        contactPage: {
          hero: {
            title: "Ας Επικοινωνήσουμε",
            subtitle: "Έχετε κάποιο project στο μυαλό σας; Θα χαρούμε να ακούσουμε από εσάς. Στείλτε μας ένα μήνυμα και θα σας απαντήσουμε το συντομότερο δυνατό."
          },
          form: {
            title: "Στείλτε μας Μήνυμα",
            name: "Όνομα",
            namePlaceholder: "Το όνομά σας",
            email: "Email",
            emailPlaceholder: "Το email σας",
            subject: "Θέμα",
            subjectPlaceholder: "Σχετικά με τι είναι;",
            message: "Μήνυμα",
            messagePlaceholder: "Πείτε μας για το project σας ή την ερώτησή σας...",
            submit: "Αποστολή Μηνύματος"
          },
          info: {
            title: "Επικοινωνήστε Μαζί Μας",
            email: "Email",
            phone: "Τηλέφωνο",
            address: "Διεύθυνση",
            hours: "Ώρες Λειτουργίας",
            weekdays: "Δευτέρα - Παρασκευή",
            followUs: "Ακολουθήστε μας"
          },
          banner: {
            text: "Είμαστε Εδώ για να Βοηθήσουμε"
          }
        },
        footer: {
          companyDescription: "Δημιουργούμε μοναδικά designs που εμπνέουν και μετατρέπουν τις ιδέες σε πραγματικότητα.",
          quickLinks: "Γρήγοροι Σύνδεσμοι",
          services: {
            customDesign: "Custom Design",
            personalisedGifts: "Personalised Gifts",
            prototyping: "Prototyping",
            consulting: "Consulting"
          },
          madeBy: {
            prefix: "Made by",
            suffix: "with"
          },
          copyright: "© 2025 Atelier Anadelta. Όλα τα δικαιώματα κατοχυρωμένα."
        }
      }
    }
  },
  lng: "el",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;