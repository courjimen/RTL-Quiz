import { act } from "react"
import MultipleFetches from "../MultipleFetches.js"
import { render, fireEvent, cleanup, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

afterEach(cleanup)

test('starts without any post', () => {
 render(<MultipleFetches />)
 expect(screen.queryByTestId('fetch-post')).toBeNull;

});

test('after clicking on button, displays loading message', () => {

 render(<MultipleFetches />)
 fireEvent.click(screen.getByRole('button'));
 expect(screen.getByTestId('fetch-loading-post')).toBeInTheDocument();
});

// Group all API tests together and clear each mock after each test.
describe('API tests', () => {

  test.skip('displays post if API succeeds', async () => {
    /*
    3️⃣ [Success State Test] The third test should group all API tests together and clear each mock after each test.

    - Create controlled Promises for both fetches
    - Mock the fetch API for both calls (e.g. `jest.spyOn()`)
    - Render the component
    - Emmulate a button click using `fireEvent.click()`
    - Resolve the first fetch promise (post), but allow the component to process the state update

      ```
      await act(async () => {
        postPromiseResolve.resolve({
          status: 200,
          json: () => Promise.resolve({
            title: "A Really Cool Title"
          })
        });

        await new Promise(....things-here...);
      });
      ```
    - Resolve the second fetch promise (comments), but allow the component to process the state update

      ```
      await act(async () => {
        commentsPromiseResolve.resolve({
          status: 200,
          json: () => Promise.resolve([
            { id: #, name: "Daaimah" },
            ....possibly-more-things...
          ])
        });

        await new Promise(....things-here...);
      });
      ```
    - Assert that post and comments are displayed (you may need to do some console printing here to test what kind of data you are getting back)
    - Check comment authors
    */

    // global.fetch.mockClear();

  });
  
  test.skip('displays comments error if API fails', async () => {
    /*
    4️⃣ [Comments Error Test] The fourth test should handle displaying comment if API fails.
    - Create controlled promises for both fetches
    - Mock the fetch API for both calls (e.g. `jest.spyOn()`)
    - Render the component
    - Emmulate a button click using `fireEvent.click()`
    - Resolve the first fetch promise (post) with success, but allow the component to process the state update

      ```
      await act(async () => {
        postPromiseResolve.resolve({
          status: ###,
          json: () => Promise.resolve({
            title: "A Really Cool Title"
          })
        });

        await new Promise(....things-here...);
      });
      ```
      
    - Resolve the second fetch promise (comments) with error, but allow the component to process the state update

      ```
      await act(async () => {
        commentsPromiseResolve.resolve({
          status: ###
        });

        await new Promise(....things-here...);
      });
      ```
    - Assert that post is displayed but comments show error
    */

    // global.fetch.mockClear();

  });
  
  test.skip('displays post error if API fails', async () => {
    /*
    5️⃣ [Post Error Test] The fifth test should handle displaying post error if API fails.

    - Create controlled promises for both fetches
    - Mock the fetch API for both calls (e.g. `jest.spyOn()`)
    - Render the component
    - Emmulate a button click using `fireEvent.click()`
    - Resolve the fetch promise with error, but allow component to process the state update
      ```
      await act(async () => {
        postPromiseResolve.resolve({
          status: ###
        });
      
        await new Promise(...things-here...);
      });
      ```
      - Assert that error message is displayed

    */
  });

  // global.fetch.mockClear();

});