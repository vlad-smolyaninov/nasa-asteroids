import React from "react";
import styled from "styled-components";
import DateRangePicker, { DateRange} from 'rsuite/DateRangePicker';
import {useRouter} from "next/router";
import {routes} from "@/shared/routes";

const {
    allowedMaxDays, afterToday,
    combine
} = DateRangePicker


const FormCard = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.contrastLight};
  padding: 36px 20px;
  font-size: 14px;
`

export const DateRangeForm: React.FC<{ startDate: string, endDate: string }> = ({startDate, endDate}) => {
    const router = useRouter();

    const [value, setValue] = React.useState<[Date, Date] | null>([
        new Date(startDate),
        new Date(endDate)
    ]);

    const handleDateChange = (dateRange: DateRange | null) => {
        if (!dateRange) return

        const [newStartDate, newEndDate] = dateRange
        router.push(routes.ASTEROIDS + `?startDate=${newStartDate.toISOString().slice(0, 10)}&endDate=${newEndDate.toISOString().slice(0, 10)}`)
        setValue(dateRange)
    }

    return (
        <FormCard>
            <div>Select asteroids date range:</div>
            <DateRangePicker
                value={value}
                onChange={handleDateChange}
                shouldDisableDate={combine?.(allowedMaxDays?.(7), afterToday?.())}/>
        </FormCard>
    )
}

