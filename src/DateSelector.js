
import React, { useState } from 'react';

function DateSelector(onSelectDate) {
    
        const [selectedDate, setSelectedDate] = useState('');
      
        const handleDateChange = (event) => {
          const newDate = event.target.value;
          setSelectedDate(newDate);
          onSelectDate(newDate);
        };
    
        return ( 
            <div>
            <label htmlFor="date">Select Date: </label>
            <input
              id="date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

     );
    };

    export default DateSelector ;