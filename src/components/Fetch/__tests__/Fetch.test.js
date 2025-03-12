import { act } from "react"
import Fetch from "../Fetch.js"
import { render, fireEvent, cleanup, queryByTestId, screen } from "@testing-library/react"

afterEach(cleanup)

test('starts without any joke', () => {
  render(<Fetch />)
  expect(screen.queryByTestId('fetch-joke')).toBeNull
})

test('when clicking on button, displays loading message', () => {
  render(<Fetch />)
  fireEvent.click(screen.getByRole('button'))
  expect(screen.getByTestId('fetch-loading')).toBeInTheDocument()
});

test.skip('when clicking on button displays joke if API succeeds', async () => {
/*
3️⃣ [Success State Test] The third test should handle displaying a joke if API succeeds, upon button click.
- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the fetch promise with success response, but allow component to process the state update
  ```
  await act(async () => {
    fetchPromiseResolve.resolve({
      status: ###,
      json: () => Promise.resolve({
        value: "Chuck Norris counted to infinity. Twice."
      })
    });
    // Allow component to process the state update
    await new Promise(...things-here...);
  });
  ```

- Assert that joke is displayed
- Verify fetch was called correctly (you may need to do some console printing here to test what kind of data you are getting back)
*/

  // global.fetch.mockClear();

});

test.skip('when clicking on button displays error if API fails', async () => {
/*
4️⃣ [Error State Test] The fourth test should handle displaying an error if API fails, upon button click.
- Create controlled promises for both fetches
- Mock the fetch API for both calls (e.g. `jest.spyOn()`)
- Render the component
- Emmulate a button click using `fireEvent.click()`
- Resolve the fetch promise with error response, but allow component to process the state update
  ```
  await act(async () => {
    fetchPromiseResolve.resolve({
      status: ###
    });
    // Allow component to process the state update
    await new Promise(...things-here...);
  });
  ```
- Assert that error message is displayed
- Verify fetch was called correctly (you may need to do some console printing here to test what kind of data you are getting back)
*/

  // global.fetch.mockClear();

});