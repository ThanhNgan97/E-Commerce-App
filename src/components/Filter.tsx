const Filter = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row md:justify-between gap-4">
      {/* Left Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          name="type"
          className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ecedec] text-gray-600"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl px-3 py-2 w-24 border border-gray-300 text-gray-600 placeholder-gray-400"
        />

        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl px-3 py-2 w-24 border border-gray-300 text-gray-600 placeholder-gray-400"
        />

        <select
          name="size"
          className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ecedec] text-gray-600"
        >
          <option>Size</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
        </select>

        <select
          name="color"
          className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ecedec] text-gray-600"
        >
          <option>Color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>

        <select
          name="category"
          className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ecedec] text-gray-600"
        >
          <option>Category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

        <select
          name="all_filter"
          className="px-4 py-2 rounded-2xl text-xs font-medium bg-[#ecedec] text-gray-600"
        >
          <option>All Filters</option>
        </select>
      </div>

      {/* Right Sort */}
      <div>
        <select
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white border border-gray-300 text-gray-600"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
