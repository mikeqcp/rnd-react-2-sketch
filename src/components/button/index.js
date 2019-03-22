import React from 'react';
import { ButtonType } from './types';
import { Button as GenericButton } from './button.component';


export const PrimaryButton = props => <GenericButton type={ButtonType.PRIMARY} {...props} />;
export const SecondaryButton = props => <GenericButton type={ButtonType.SECONDARY} {...props} />;
export const Button = GenericButton;
