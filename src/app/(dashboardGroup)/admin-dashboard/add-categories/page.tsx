import AddCategoryForm from "../_adminComponents/AddCategory/AddCategory";


const AddCategoryPage = () => {
   
    return (
      <div className="p-4">
      <div className="mb-8 ">
        <h2 className="font-lora text-2xl font-bold text-foreground text-center ">
         Add Category
        </h2>

        <p className="mt-1 font-inter text-sm text-foreground/60 text-center ">
         Fill Up The Form To add New category
        </p>
      </div>
            <div className="py-4"><AddCategoryForm/></div>
        </div>
    );
};

export default AddCategoryPage;