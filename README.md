<html>
<h1>Image Search Abstraction Layer</h1>

    - The objective for this challenge is to create a server that provides with the lins to the images we search.
    - Additionally we can check in what page on the search we want to extract the file.
    - Also, We will have a path to check for the most popular searchs, in our database.
    

For this challenge we are going to use:

    - After a research on the different API's, I decided to use this API REST called: Bing Search API for NodeJS
      It seems that fits this project completely, and has a good number of free search per month (bing).
      
<h2>How to use this App:</h2>
         - introduce after the url this: /imagesearch/'< whatever you want here>'
         - If you want you can add <?offset="number"> and you will get the number of results desired</p>
       
        <h3>Example:</h3>
        
                https://fcc-basejumps-abel1987.c9users.io/imagesearch/cats
                 -->The result will be a search for images of cats.
                
                https://fcc-basejumps-abel1987.c9users.io/imagesearch/cats?offset=11
                 --> You will get a cats image search with 11 results

</html>