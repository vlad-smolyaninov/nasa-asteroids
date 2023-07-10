import {SortDirection} from "@/features/asteroids-list/types";
import ArrowIcon from '@/assets/arrow.svg';
import styled from "styled-components";

interface SortingArrowButtonProp {
    sortedField: string | number | symbol | null
    sortedDirection: SortDirection | null
    name: string
}


const ButtonWrapper = styled.span`
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
`


export const SortingArrowButton: React.FC<SortingArrowButtonProp & React.SVGAttributes<HTMLSpanElement>>
    = ({
           sortedField,
           sortedDirection,
           name,
           ...props
       }) => {


    return (
        <ButtonWrapper {...props}><ArrowIcon
            opacity={sortedField === name ? 1 : 0.5}
            style={{
                transform:
                    sortedField === name && sortedDirection === 'desc'
                        ? 'rotate(180deg)'
                        : undefined,
            }}/>
        </ButtonWrapper>
    )
}