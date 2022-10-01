import '../styles/styles.css';
import Person from './modules/Person';
if (module.hot){
    module.hot.accept();
}

/* Exercise creating inheritance */
class Adult extends Person {
    payTaxes(){
        console.log(this.name + " now owes zero taxes.");
    }
}

let alyn = new Adult("Avalyn", "Yellowist");
alyn.greet();
alyn.payTaxes();

let ruvi = new Person("Aruvi", "Green");
ruvi.greet();
