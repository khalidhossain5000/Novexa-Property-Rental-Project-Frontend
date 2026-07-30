import React from 'react';
import LandlordPropertyListing from '../_landlordComponents/LandlordProperties/LandlordPropertyListing';
import { getCurrentLandlordProperties } from '../../_actions/propertyActions';

const LandlordAllProperties = async () => {
    const currentLandlordProperties=await getCurrentLandlordProperties()
    
    return (
        <div>
            <LandlordPropertyListing  currentLandlordProperties={currentLandlordProperties}/>
        </div>
    );
};

export default LandlordAllProperties;