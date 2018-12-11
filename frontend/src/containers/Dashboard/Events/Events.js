import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';
import AllEvents from '../../../components/Dashboard/AllEvents/AllEvents';
import CreateEvent from '../../../components/Dashboard/CreateEvent/CreateEvent';
import EditEvent from '../../../components/Dashboard/EditEvent/EditEvent';
import Event from '../../../components/Dashboard/Event/Event';

import axios from '../../../Axios';


class Events extends Component {

    state = {
        events: [],
        error: false
    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/calendar' )
            .then( response => {
                const events = response.data;
                const updatedEvents = events.map(event => {
                    return {
                        ...event
                    }
                });
                this.setState({events: updatedEvents}); 
                //console.log(this.state.events);
                //console.log( "respose" + response );
                const $ = window.$;
                $(document).ready( function () {
                $('#eventsTable').DataTable();
        } );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
    }

   

    render() {

        let events;
        if (!this.state.error) {
            events = this.state.events.map(event => {
                console.log(event);
                return (
                    
                    <Event 
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        startDate={event.StartDate}
                        endDate={event.EndDate}
                        />
                );
            });
        }

        return (
            <div className="main-panel">
                <TopNav title={"Administración de eventos"}/>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <AllEvents>
                                {events}
                            </AllEvents>    
                            <CreateEvent/>
                            <EditEvent/>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Events;