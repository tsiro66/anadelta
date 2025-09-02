import { Link } from "react-router"

const Services = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center pt-8 sm:pt-10 md:pt-16 lg:pt-20">
          Υπηρεσίες
        </h1>
        <p className="text-center text-gray-700 text-base sm:text-lg mb-12 sm:mb-16 max-w-3xl mx-auto mt-4 sm:mt-6">
          Από το 2010 παρέχουμε διαδικτυακές υπηρεσίες κοπής και χάραξης υλικών με lasercutter σε δημιουργικούς ανθρώπους και εταιρίες. Επικοινωνήστε μαζί μας στέλνοντας το σχέδιο ή την ιδέα σας και θα σας βοηθήσουμε να το φτιάξετε!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-20 max-w-7xl mx-auto">
          {/* Service 1 - Κοπή και χάραξη υλικών */}
          <div className="ring-1 ring-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:ring-2 transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">
                Κοπή και χάραξη υλικών
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Παρέχουμε υπηρεσίες επεξεργασίας υλικών με τη χρήση καινοτόμου τεχνολογίας lasercutting σε δημιουργικούς ανθρώπους και εταιρίες. Είμαστε νέοι μηχανικοί και makers και βρισκόμαστε στη διάθεση σας για να εκτελέσουμε άμεσα και αποτελεσματικά την παραγγελία σας.
            </p>
          </div>

          {/* Service 2 - Σχεδιασμός Μακέτας */}
          <div className="ring-1 ring-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:ring-2 transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">
                Σχεδιασμός Μακέτας
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Υποστηρίζουμε σχεδιαστικά τις ιδέες σας και βελτιστοποιούμε την παραγωγή. Η ομάδα μας αποτελείται από έμπειρους σχεδιαστές, με άριστη γνώση σχεδιαστικών προγραμμάτων και μεθόδων κατασκευής, οι οποίοι είναι σε θέση να δημιουργήσουν την κατάλληλη μακέτα για εσάς.
            </p>
          </div>

          {/* Service 3 - Κατασκευή Πρωτοτύπων */}
          <div className="ring-1 ring-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:ring-2 transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">
                Κατασκευή Πρωτοτύπων
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Κατασκευάζουμε πρωτότυπα αντικείμενα κατά παραγγελία με βάση τις προδιαγραφές σας. Σαν γνήσιοι makers ενδιαφερόμαστε για κάθε νέο project και μπορούμε να σας βοηθήσουμε να πραγματοποιήσετε οποιαδήποτε ιδέα σας γρήγορα και ποιοτικά.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="max-w-4xl mx-auto pb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            Τι Προσφέρουμε
          </h2>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Design</h3>
              <p className="leading-relaxed">
                Δημιουργούμε μοναδικά σχέδια προσαρμοσμένα στις ανάγκες και τις προδιαγραφές σας, από την ιδέα μέχρι την τελική υλοποίηση.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Προσωποποιημένα Δώρα (Σχεδιασμός & Παραγωγή)</h3>
              <p className="leading-relaxed">
                Σχεδιάζουμε και κατασκευάζουμε εξατομικευμένα δώρα που κάνουν τη διαφορά. Από τον σχεδιασμό μέχρι την παραγωγή, δημιουργούμε κάτι μοναδικό για εσάς.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Χρήση Εξοπλισμού</h3>
              <p className="leading-relaxed">
                Μετά την παρακολούθηση του σχετικού workshop, μπορείτε να χρησιμοποιήσετε τον επαγγελματικό μας εξοπλισμό για τα δικά σας projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Workshops</h3>
              <p className="leading-relaxed">
                Διοργανώνουμε εκπαιδευτικά σεμινάρια όπου μαθαίνετε να χρησιμοποιείτε τον εξοπλισμό και τις τεχνικές laser cutting για να δημιουργήσετε τα δικά σας έργα.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pb-20">
          <Link to="/contact" className="inline-block border border-gray-900 py-2.5 sm:py-4 px-5 sm:px-8 rounded-xl self-center 
         hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer text-lg sm:text-xl">
            Επικοινωνήστε μαζί μας
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services