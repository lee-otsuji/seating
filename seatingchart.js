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
        
        // Table 3
        { name: 'Michelle Wong', page: 'table-03.html' },
        { name: 'Russell Chew', page: 'table-03.html' },
        { name: 'Sharon Fong', page: 'table-03.html' },
        { name: 'Thao Le', page: 'table-03.html' },
        { name: 'Zane Tsai', page: 'table-03.html' },
        { name: 'Andrew Tsai', page: 'table-03.html' },
        { name: 'Brandon Wong', page: 'table-03.html' },
        { name: 'Diane Lee', page: 'table-03.html' },
        { name: 'Kevin Lee', page: 'table-03.html' },
        
        // Table 4
        { name: 'Teresa Arellano', page: 'table-04.html' },
        { name: 'Joe Arellano', page: 'table-04.html' },
        { name: 'Matthew Sprague', page: 'table-04.html' },
        { name: 'Christy Reyes', page: 'table-04.html' },
        { name: 'Patty Osaki', page: 'table-04.html' },
        { name: 'Dave Osaki', page: 'table-04.html' },
        { name: 'Richie Margroff', page: 'table-04.html' },
        { name: 'Aiko Forchette', page: 'table-04.html' },
        
        // Table 5
        { name: 'Jill Nakatani', page: 'table-05.html' },
        { name: 'Nate Gabriel', page: 'table-05.html' },
        { name: 'Karen Nakatani', page: 'table-05.html' },
        { name: 'Ron Nakatani', page: 'table-05.html' },
        { name: 'Alison Saltonstall', page: 'table-05.html' },
        { name: 'Lincoln Stepp', page: 'table-05.html' },
        { name: 'Lincoln Stepp, Jr.', page: 'table-05.html' },                
        // Table 6
        { name: 'Charlene Otsuji', page: 'table-06.html' },
        { name: 'Linda Gee', page: 'table-06.html' },
        { name: 'Jenny Tran', page: 'table-06.html' },
        { name: 'Megan Flanigan', page: 'table-06.html' },
        { name: 'Kathy McMurchy', page: 'table-06.html' },
        { name: 'Dodd Saltonstall', page: 'table-06.html' },
        { name: 'Marlene Saltonstall', page: 'table-06.html' },
        { name: 'Karen Yamada', page: 'table-06.html' },
        
        // Table 7
        { name: 'Emiko Lombrana', page: 'table-07.html' },
        { name: 'Melanie Lombrana', page: 'table-07.html' },
        { name: 'Benjamin Lombrana', page: 'table-07.html' },
        { name: 'Kenji Lombrana', page: 'table-07.html' },
        { name: 'Raizo Lombrana', page: 'table-07.html' },
        { name: 'Conner Nakatani', page: 'table-07.html' },
        { name: 'Riley Nakatani', page: 'table-07.html' },
        { name: 'Neil Nakatani', page: 'table-07.html' },
        { name: 'Eileen Nakatani', page: 'table-07.html' },
		
        // Table 8
        { name: 'Philip Fang', page: 'table-08.html' },
        { name: 'Jasmine Lee', page: 'table-08.html' },
        { name: 'Stacey Lee', page: 'table-08.html' },
        { name: 'Joshua Lee', page: 'table-08.html' },
        { name: 'Vanessa Lee', page: 'table-08.html' },
        { name: 'Zion Lee', page: 'table-08.html' },
        { name: 'Adelaide Lee', page: 'table-08.html' },
        { name: 'Cadence Lee', page: 'table-08.html' },
		
        // Table 9
        { name: 'Curtis Chang', page: 'table-09.html' },
        { name: 'Sung (Vincent) Lee', page: 'table-09.html' },
        { name: 'Celeste Chang', page: 'table-09.html' },
        { name: 'Jessica Lee', page: 'table-09.html' },
        { name: 'Eleanor Lee', page: 'table-09.html' },
        { name: 'Benjamin Lee', page: 'table-09.html' },
        { name: 'Joseph Lee', page: 'table-09.html' },
		
		// Table 10
        { name: 'Meihuei Judy Chang', page: 'table-10.html' },
        { name: 'Shih-Tsung (Steve) Chang', page: 'table-10.html' },
        { name: 'Richard Lee', page: 'table-10.html' },
        { name: 'Meiyuan Lee', page: 'table-10.html' },
        { name: 'Elton Chai', page: 'table-10.html' },
        { name: 'Chris Chai', page: 'table-10.html' },
        { name: 'Leslie Lee', page: 'table-10.html' },
        { name: 'Shiuh-Lin Lee', page: 'table-10.html' },
		
        // Table 11
        { name: 'Gemma Lee', page: 'table-11.html' },
        { name: 'Isabel Lee', page: 'table-11.html' },
        { name: 'Charlene Lee', page: 'table-11.html' },
        { name: 'Steven Lee', page: 'table-11.html' },
        { name: 'Cindy Sum', page: 'table-11.html' },
        { name: 'Andrew Sum', page: 'table-11.html' },
		
		// Table 12
        { name: 'Celina Chai', page: 'table-12.html' },
        { name: 'Sophie Chai', page: 'table-12.html' },
        { name: 'Jack Chai', page: 'table-12.html' },
        { name: 'Fei Chai', page: 'table-12.html' },
        { name: 'Joyce Chai', page: 'table-12.html' },
        { name: 'Max Kim', page: 'table-12.html' },
        { name: 'Aiden Kim', page: 'table-12.html' },
	{ name: 'Tammy Lee', page: 'table-12.html' },
		
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
        { name: 'Ashley Garner', page: 'table-14.html' },
        { name: 'Jamal Ford', page: 'table-14.html' },
        { name: 'Melissa Flores', page: 'table-14.html' },
        { name: 'Michael Flores', page: 'table-14.html' },
        { name: 'Mark Matus', page: 'table-14.html' },
        { name: 'Lindsey Matus', page: 'table-14.html' },
        { name: 'Leah Jin', page: 'table-14.html' },
        { name: 'Chris Saur', page: 'table-14.html' },
        { name: 'Joelle Saur', page: 'table-14.html' },
		
        // Table 15
        { name: 'Angela (Angie) Fong', page: 'table-15.html' },
        { name: 'Rafael Olimpiada', page: 'table-15.html' },
        { name: 'Jacob Morgan', page: 'table-15.html' },
        { name: 'Ricky Lew', page: 'table-15.html' },
        { name: 'Amy Chow', page: 'table-15.html' },
        { name: 'Liam Lew', page: 'table-15.html' },
        { name: 'Vivi Tran', page: 'table-15.html' },
        { name: 'Samuel Chow', page: 'table-15.html' },
	{ name: 'Marvin Williams', page: 'table-15.html' },
        { name: 'Miles Williams', page: 'table-15.html' },
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
