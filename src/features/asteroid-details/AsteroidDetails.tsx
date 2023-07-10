import React from 'react';
import styled from "styled-components";
import {Asteroid} from "@/entities/Asteroid";

const DetailsCard = styled.div`
  background: ${({theme}) => theme.colors.main};
  color: ${({theme}) => theme.colors.contrastAccent};
  margin: 40px 24px 0;
  border: 1px solid ${({theme}) => theme.colors.contrastAccentLight};
  border-radius: 8px;
  padding: 36px 0;
  text-align: center;
  font-size: 14px;
`

export const AsteroidDetails: React.FC<{ asteroid: Asteroid }> = ({asteroid}) => (
    <div>
        <DetailsCard>
            <h3>
                {asteroid.name}
            </h3>
            <div>Approach date: {asteroid.close_approach_data[0].close_approach_date}</div>
            <div>Absolute magnitude: {asteroid.absolute_magnitude_h}</div>
        </DetailsCard>

    </div>
)

