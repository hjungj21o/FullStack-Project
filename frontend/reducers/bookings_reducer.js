import {
    RECEIVE_BOOKINGS,
    RECEIVE_BOOKING,
    REMOVE_BOOKING
} from '../actions/booking_actions';



const bookingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return Object.assign({}, action.bookings);
        case RECEIVE_BOOKING:
            return Object.assign({}, oldState, {[action.booking.id]: action.booking})
        case REMOVE_BOOKING:
            const newState = Object.assign({}, oldState);
            delete newState[bookingId];
            return newState;
        default:
            return oldState;
    }
}

export default bookingsReducer;