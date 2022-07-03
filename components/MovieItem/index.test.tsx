import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieItem from "./index";
import { movie } from "@mocks/movie";


describe("MovieItem", () => {
    it("Should render all movie informations", async () => {
        render(<MovieItem movie={movie} />);

        const displayedImage = document.querySelector("img");
        if (displayedImage !== null) {
            expect(displayedImage.src).toBe("https://image.tmdb.org/t/p/w300/rL1YQLqUtHK3HdQyenHvuOCuWzO.jpg");
        }

        expect(screen.getByText("Les Évadés").textContent);
        expect(screen.getByText("1994").textContent);
    });
});