function show_popup(flight_tr_id){

    var tr_element = document.getElementById(flight_tr_id);
    console.log('tr_element: ');
    console.log(tr_element);

    var flight_id = tr_element.getAttribute('data-flight-id');
    var flight_from = tr_element.getAttribute('data-flight-from');
    var flight_to = tr_element.getAttribute('data-flight-to');
    var flight_jet_type = tr_element.getAttribute('data-flight-jet-type');
    var flight_date = tr_element.getAttribute('data-flight-date');
    console.log('flight_id: ' + flight_id);
    console.log('flight_from: ' + flight_from);
    console.log('flight_to: ' + flight_to);
    console.log('flight_jet_type: ' + flight_jet_type);
    console.log('flight_date: ' + flight_date);


    document.getElementById('flight-id').value = flight_id;
    document.getElementById('flight-from').value = flight_from;
    document.getElementById('flight-to').value = flight_to;
    document.getElementById('flight-jet-type').value = flight_jet_type;
    document.getElementById('flight-date').value = flight_date;


    document.getElementById('flight-from-text').innerHTML = flight_from;
    document.getElementById('flight-to-text').innerHTML = flight_to;
    document.getElementById('flight-jet-type-text').innerHTML = flight_jet_type;
    document.getElementById('flight-date-text').innerHTML = flight_date;

    
    var popup_element = document.getElementById('popup');
    popup_element.classList.add("active");

    return false;
}

function hide_popup(){
    var popup_element = document.getElementById('popup');
    popup_element.classList.remove("active");
    return false;
}