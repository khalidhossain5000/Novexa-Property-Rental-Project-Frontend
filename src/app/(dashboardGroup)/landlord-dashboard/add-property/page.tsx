import React from 'react';
import AddPropertyForm from '../_landlordComponents/AddPropertyForm/AddPropertyForm';
import { getPropertyCategories } from '../../_actions/getCategory';

const AddProperty = async() => {
    const propertyCategories=await getPropertyCategories()
  
    return (
        <div>
            <AddPropertyForm propertyCategories={propertyCategories}/>
        </div>
    );
};

export default AddProperty;