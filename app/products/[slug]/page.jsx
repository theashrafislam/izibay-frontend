import CategoryTabs from "@/app/Components/CategoryTabs";

const CategoryProductsPage = async ({ params }) => {
    const { slug } = await params;

    console.log(slug);

    return (
        <div className="">
            <div className="">
                <CategoryTabs activeSlug={slug} />
            </div>

            {/* Page content */}
            <div className="mt-8 max-w-7xl mx-auto px-4 lg:px-0">
                <h1 className="text-2xl font-bold capitalize">
                    {slug.replace("-", " ")}
                </h1>
            </div>
        </div>
    );
};

export default CategoryProductsPage;
