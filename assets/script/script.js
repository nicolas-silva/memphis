// Class Event - to be populated from db
class UpcomingEvent{
    constructor(title, date, weekday, thumble, subject, description){
        this.title = title;
        this.date = date;
        this.weekday = weekday;
        this.thumble = thumble;
        this.subject = subject;
        this.description = description;
    }
    
    subscribe(){
        
    }
    
    validate_title()
    {
        if (this.title.length >=3) {
            return true;
        }
        return false;
    }
}

// Array of events to list all events to be displayed
let events = [];

//instantiating an object
events.concat(new UpcomingEvent("Event #13", 
                                "18/05/2018", 
                                "friday", 
                                "./img/events/thirteen.jpg", 
                                "Event #13 subscribe",
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit."));

