import { DateRangePicker } from 'react-date-range';
import { sub, startOfMonth, endOfMonth } from 'date-fns'

export default function CalendarPicker ({state, setState, setStartDate, setEndDate}) {
    const handleSelect = (ranges) => {
        const {startDate, endDate} = ranges.selection
        console.log(ranges)
        setState([ranges.selection])
        setStartDate(startDate)
        setEndDate(endDate)
      }
      return (
        <>
          <div 
          style={{
            boxShadow: "20px 20px 50px"
          }}
          >
            <DateRangePicker
              onChange={handleSelect}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              staticRanges={[
                {
                  label: 'Yesterday',
                  hasCustomRendering: false,
                  range: () => ({
                    startDate: sub(new Date(), {days: 1}),
                    endDate: sub(new Date(), {days: 1}),
                    key: 'selection'
                  }),
                  isSelected() {
                    return false;
                  }
                },
                {
                  label: 'Last 7 Day',
                  hasCustomRendering: false,
                  range: () => ({
                    startDate: sub(new Date(), {days: 7}),
                    endDate: sub(new Date(), {days: 1}),
                    key: 'selection'
                  }),
                  isSelected() {
                    return false;
                  }
                },
                {
                  label: 'Last 30 Day',
                  hasCustomRendering: false,
                  range: () => ({
                    startDate: sub(new Date(), {days: 30}),
                    endDate: sub(new Date(), {days: 1}),
                    key: 'selection'
                  }),
                  isSelected() {
                    return false;
                  }
                },
                {
                  label: 'This Month',
                  hasCustomRendering: false,
                  range: () => ({
                    startDate: startOfMonth(new Date()),
                    endDate: endOfMonth(new Date()),
                    key: 'selection'
                  }),
                  isSelected() {
                    return false;
                  }
                }
              ]}
            />
          </div>
        </>
      )
}