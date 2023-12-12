import React from "react";
import { render, screen } from "@testing-library/react";

import GroupsPage from "../GroupsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders groups page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <GroupsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("groups-datatable")).toBeInTheDocument();
    expect(screen.getByRole("groups-add-button")).toBeInTheDocument();
});
