// JavaScript Document
// Data for guest names and corresponding table pages
    const guests = [
	// Table 0 Head Table
        { name: 'Jamie Chow', page: 'table-00.html' },
        { name: 'Linda Nguyen', page: 'table-00.html' },
        { name: 'Amie Jung', page: 'table-00.html' },
        { name: 'Annie Shi', page: 'table-00.html' },
        { name: 'Ryan Wong', page: 'table-00.html' },
        { name: 'Greg Fujii', page: 'table-00.html' },
        { name: 'Kyle Goto', page: 'table-00.html' },
        { name: 'Jason Jung', page: 'table-00.html' },
		
        // Table 1
        { name: 'Linda Tsang', page: 'table-01.html' },
        { name: 'Ryan Miyata', page: 'table-01.html' },
        { name: 'Matthew Lee', page: 'table-01.html' },
        { name: 'Christy Lee', page: 'table-01.html' },
        { name: 'Doris Sanui', page: 'table-01.html' },
        { name: 'Mark Sanui', page: 'table-01.html' },
        { name: 'Johnny Fonseca', page: 'table-01.html' },
        { name: 'Jason Fong', page: 'table-01.html' },
        { name: 'Marina Fong', page: 'table-01.html' },
        
        // Table 2
        { name: 'Jamie Kojima', page: 'table-02.html' },
        { name: 'Mitch Kojima', page: 'table-02.html' },
        { name: 'Danny Yamamoto', page: 'table-02.html' },
        { name: 'Garret Goto', page: 'table-02.html' },
        { name: 'James Akiyama', page: 'table-02.html' },
        { name: 'Kris Kadoshima', page: 'table-02.html' },
        { name: 'Karrie Koh', page: 'table-02.html' },
	{ name: 'Richie Margroff', page: 'table-02.html' },
        { name: 'Aiko Forchette', page: 'table-02.html' },
	    
        // Table 3
        { name: 'Teresa Arellano', page: 'table-03.html' },
        { name: 'Joseph (Joe) Arellano', page: 'table-03.html' },
        { name: 'Matthew Sprague', page: 'table-03.html' },
        { name: 'Christy Reyes', page: 'table-03.html' },
        { name: 'Jill Nakatani', page: 'table-03.html' },
        { name: 'Nate Gabriel', page: 'table-03.html' },
        { name: 'Alison Saltonstall', page: 'table-03.html' },
        { name: 'Lincoln Stepp', page: 'table-03.html' },
        { name: 'Lincoln Stepp, Jr.', page: 'table-03.html' },                
   
        // Table 4
        { name: 'Michelle Wong', page: 'table-04.html' },
        { name: 'Russell Chew', page: 'table-04.html' },
        { name: 'Sharon Fong', page: 'table-04.html' },
        { name: 'Brandon Wong', page: 'table-04.html' },
        { name: 'Diane Lee', page: 'table-04.html' },
        { name: 'Kevin Lee', page: 'table-04.html' },
	{ name: 'Patty Osaki', page: 'table-04.html' },
        { name: 'Dave Osaki', page: 'table-04.html' },

        // Table 5
        { name: 'Emiko Lombrana', page: 'table-05.html' },
        { name: 'Melanie Lombrana', page: 'table-05.html' },
        { name: 'Benjamin Lombrana', page: 'table-05.html' },
        { name: 'Kenji Lombrana', page: 'table-05.html' },
        { name: 'Raizo Lombrana', page: 'table-05.html' },
        { name: 'Conner Nakatani', page: 'table-05.html' },
        { name: 'Riley Nakatani', page: 'table-05.html' },
        { name: 'Neil Nakatani', page: 'table-05.html' },
        { name: 'Eileen Nakatani', page: 'table-05.html' },
		
        // Table 6
        { name: 'Philip Fang', page: 'table-06.html' },
        { name: 'Jasmine Lee', page: 'table-06.html' },
        { name: 'Stacey Lee', page: 'table-06.html' },
        { name: 'Jessica Lee', page: 'table-06.html' },
        { name: 'Eleanor Lee', page: 'table-06.html' },
        { name: 'Benjamin Lee', page: 'table-06.html' },
        { name: 'Joseph Lee', page: 'table-06.html' },
		             
	// Table 7
        { name: 'Charlene Otsuji', page: 'table-07.html' },
        { name: 'Linda Gee', page: 'table-07.html' },
        { name: 'Jenny Tran', page: 'table-07.html' },
        { name: 'Kathy McMurchy', page: 'table-07.html' },
        { name: 'Marlene Saltonstall', page: 'table-07.html' },
        { name: 'Karen Yamada', page: 'table-07.html' },
	{ name: 'Karen Nakatani', page: 'table-07.html' },
        { name: 'Ron Nakatani', page: 'table-07.html' },
        	
	// Table 8
        { name: 'Meihuei Judy Chang', page: 'table-08.html' },
        { name: 'Shih-Tsung (Steve) Chang', page: 'table-08.html' },
        { name: 'Richard Lee', page: 'table-08.html' },
        { name: 'Meiyuan Lee', page: 'table-08.html' },
        { name: 'Elton Chai', page: 'table-08.html' },
        { name: 'Chris Chai', page: 'table-08.html' },
        { name: 'Leslie Lee', page: 'table-08.html' },
        { name: 'Shiuh-Lin Lee', page: 'table-08.html' },
		
        // Table 9
        { name: 'Curtis Chang', page: 'table-09.html' },
        { name: 'Sung (Vincent) Lee', page: 'table-09.html' },
        { name: 'Celeste Chang', page: 'table-09.html' },
	{ name: 'Joshua Lee', page: 'table-09.html' },
        { name: 'Vanessa Lee', page: 'table-09.html' },
        { name: 'Zion Lee', page: 'table-09.html' },
        { name: 'Adelaide Lee', page: 'table-09.html' },
        { name: 'Cadence Lee', page: 'table-09.html' },
	
	// Table 10
        { name: 'Celina Chai', page: 'table-10.html' },
        { name: 'Sophie Chai', page: 'table-10.html' },
        { name: 'Jack Chai', page: 'table-10.html' },
        { name: 'Fei Chai', page: 'table-10.html' },
        { name: 'Joyce Chai', page: 'table-10.html' },
        { name: 'Max Kim', page: 'table-10.html' },
        { name: 'Aiden Kim', page: 'table-10.html' },
	{ name: 'Tammy Lee', page: 'table-10.html' },
		
	// Table 11
        { name: 'Ashley Garner', page: 'table-11.html' },
        { name: 'Jamal Ford', page: 'table-11.html' },
        { name: 'Melissa Flores', page: 'table-11.html' },
        { name: 'Michael Flores', page: 'table-11.html' },
        { name: 'Mark Matus', page: 'table-11.html' },
        { name: 'Lyndsay Matus', page: 'table-11.html' },
        { name: 'Leah Jin', page: 'table-11.html' },
        { name: 'Chris Saur', page: 'table-11.html' },
        { name: 'Joelle (JoJo) Saur', page: 'table-11.html' },
	    
	// Table 12
        { name: 'Gemma Lee', page: 'table-12.html' },
        { name: 'Isabel Lee', page: 'table-12.html' },
        { name: 'Charlene Lee', page: 'table-12.html' },
        { name: 'Steven Lee', page: 'table-12.html' },
        { name: 'Cindy Sum', page: 'table-12.html' },
        { name: 'Andrew Sum', page: 'table-12.html' },
	{ name: 'Thao Le', page: 'table-12.html' },
        { name: 'Zayden Tsai', page: 'table-12.html' },
        { name: 'Andrew Tsai', page: 'table-12.html' },
		
	// Table 13
        { name: 'Ruslan Bratan', page: 'table-13.html' },
        { name: 'Lai Saetern', page: 'table-13.html' },
        { name: 'Victoria Burkart', page: 'table-13.html' },
        { name: 'Jason (Jake) Burkart', page: 'table-13.html' },
        { name: 'Sai Sukruth Mangini', page: 'table-13.html' },
        { name: 'Alexandra (Alex) Tran', page: 'table-13.html' },
        { name: 'Eric Tran', page: 'table-13.html' },
        { name: 'David Szeto', page: 'table-13.html' },
        { name: 'Meuy Saetern', page: 'table-13.html' }, 
		
        // Table 14
        { name: 'Angela (Angie) Fong', page: 'table-14.html' },
        { name: 'Rafael Olimpiada', page: 'table-14.html' },
        { name: 'Jacob Morgan', page: 'table-14.html' },
        { name: 'Ricky Lew', page: 'table-14.html' },
        { name: 'Amy Chow', page: 'table-14.html' },
        { name: 'Liam Lew', page: 'table-14.html' },
        { name: 'Vivi Tran', page: 'table-14.html' },
        { name: 'Samuel Chow', page: 'table-14.html' },
	{ name: 'Marvin Williams', page: 'table-14.html' },
        { name: 'Miles Williams', page: 'table-14.html' },
    ];

    // Function to filter guests based on input
    function filterGuests() {
        const searchInput = document.getElementById('guestSearch').value.toLowerCase();
        const searchResults = document.getElementById('searchResults');

        // Only show results if 3 or more characters are typed
        if (searchInput.length < 4) {
            searchResults.style.display = 'none';
            return;
        }

        // Clear previous results
        searchResults.innerHTML = '';

        // Filter guests based on input
        const filteredGuests = guests.filter(guest => guest.name.toLowerCase().includes(searchInput));

        // If there are results, display them
        if (filteredGuests.length > 0) {
            searchResults.style.display = 'block';

            filteredGuests.forEach(guest => {
                const resultItem = document.createElement('a');
                resultItem.href = guest.page;
                resultItem.textContent = guest.name;
                resultItem.addEventListener('click', function () {
                    // Hide search results when a result is clicked
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.style.display = 'none'; // Hide if no results
        }
    }

    // Hide search results if clicking outside the input or results
    window.addEventListener('click', function (event) {
        const searchResults = document.getElementById('searchResults');
        const searchInput = document.getElementById('guestSearch');
        if (!searchResults.contains(event.target) && event.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });
