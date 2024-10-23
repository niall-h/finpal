import React, { ChangeEvent, useState, SyntheticEvent } from "react";

interface Props {
  search: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
}

const Search: React.FC<Props> = ({
  search,
  onChange,
  onSearchSubmit,
}: Props): JSX.Element => {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full space-y-4 bg-gray-300 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={onChange}
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Search;
