import React from 'react';
import styled from "styled-components";
import {AsteroidRow, SortingArrowButton, useSort} from "@/features/asteroids-list";
import {Asteroid} from "@/entities/Asteroid";

const AsteroidTable = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  color: ${({theme}) => theme.colors.contrastDark};

  thead tr th {
    padding: 10px 24px;
    font-weight: normal;
    color: ${({theme}) => theme.colors.contrastFonts};
  }

  th, td, tr {
    padding: 24px;
    border-bottom: 1px solid ${({theme}) => theme.colors.contrast};
  }

  tbody tr {
    cursor: pointer;
    transition: background-color 0.25s ease-out;
    user-select: none;

    &:hover {
      background: ${({theme}) => theme.colors.contrastLight};
    }
  }
`

interface AsteroidsListProps {
    asteroids: Asteroid[];
    favorites: number[];
}

export const AsteroidsList: React.FC<AsteroidsListProps> = ({asteroids, favorites}) => {
    const {onSortClick, sorted, sortedField, sortedDirection} = useSort(asteroids)

    return (
        <AsteroidTable>
            <thead>
            <tr>
                <th>Name <SortingArrowButton
                    onClick={() => onSortClick('name')}
                    sortedField={sortedField}
                    sortedDirection={sortedDirection}
                    name="name"
                /></th>
                <th>Approach date</th>
                <th>Absolute magnitude <SortingArrowButton
                    onClick={() => onSortClick('absolute_magnitude_h')}
                    sortedField={sortedField}
                    sortedDirection={sortedDirection}
                    name="absolute_magnitude_h"
                /></th>
            </tr>
            </thead>
            <tbody>
            {sorted.map((a: Asteroid) => a ?
                <AsteroidRow
                    favorites={favorites}
                    key={a.id}
                    asteroid={a}/> : '')}
            </tbody>
        </AsteroidTable>
    )
};
