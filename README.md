## Current Issues to tackle

fetch all again on update or delete? what if backend fails and state updates misleadingly?
back end currently crashes if you try and update a peep that has just been created as it is saved in state
without an id initally, when the page refreshes the useEffect fetches all from the backend.