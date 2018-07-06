Movie TMDB Challenge

Application Setup/Dependencies
------------------------------
I chose to make this project fairly simple and I did not see a reason to use any dependencies.

Go ahead and run "npm start"!!!

Challenges
----------
One thing I had never experienced before was hitting an api with so many pages for the data. On top of that, in most of the search filters I have done it was through state that I had saved and not actually using the API endpoint for the search. 

At first, both of these things through me off. I tried saving all of the movies in my own state and then filtering through my state for the search which was giving me all kinds of problems. 

I took a little more time to think it through and realized I just needed to simplify the problem more and really rely on the endpoint's search function and then take the movies that I was getting after the keyboard event, save them into my state, and then simply render my state.

Design Decisions
----------------
Unfortunately, I did not have a crazy amount of time for the design element decisions and left it pretty barebones as I spent too much time debugging my application. However, I knew that the search bar should be the feature to stand out so I left it as such.

I had teased putting a background photo in to give it a little something, but with the auto-updating of the filter and the movie images I figured it was best to leave it be.

Future Improvements
-------------------
This API was really fun and had a bunch of interesting features and things you could add to it. I think it would be really cool to add actors to it. Also, making it be able to be searched not only by movie, but by show and people as well. 

Of course, I would also like to style it more as I think there are some really cool things you could do. At the beginning I was hoping to make the interface look like a movie theatre as well, but I think that is for another time.

Conclusion
----------
Overall, I had a great time building this out. I definitely ran into some troubles with the aforementioned things, but after I had finished debugging that the API was really great to work with and a fun project in general.
