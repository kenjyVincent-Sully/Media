import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from "./index";

describe("Header", () => {
    it("Should render without crash", () => {
        render(<Header />);

        expect(screen.getByAltText('Logo Moviefinder')).toBeInTheDocument();

    });

    it('Should render Logo', () => {
        render(<Header />);

        const displayedImage = document.querySelector("img");

        if (displayedImage !== null) {
            expect(displayedImage.src).toBe("data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27182%27%20height=%2730%27/%3e");

        }

    });

    it('Should render Searchbar component', () => {
        render(<Header />);

        const displayedSearchBar = document.querySelector("input");

        if (displayedSearchBar !== null) {
            expect(displayedSearchBar.type).toBe("search");

        }
    });
});