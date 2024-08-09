Projecting images on a 3 dimensional globe using [react-globe](https://react-globe.netlify.app/).

# Requirements
* [nodejs](https://nodejs.org/en/)
* [conda](https://conda.io/projects/conda/en/latest/user-guide/install/index.html)

## Install `nodejs` using `conda`
Build the environment using `conda` and the [environment.yml](https://github.com/MathewBiddle/globe/blob/main/environment.yml) file:
```shell
conda env create -f environment.yml
conda activate globe
```

## Install [`react-scripts`](https://www.npmjs.com/package/react-scripts)
```shell
npm install react-scripts --save
```

# Developing globe webpage
## Test locally:
```shell
npm run start
```

Check that `PUBLIC_URL` is correct in [.env](https://github.com/MathewBiddle/globe/blob/main/.env) and pointing
to the appropriate GH-Pages website.

To update web version:
* Commit changes to repo
* Deploy page by running this locally:
   ```shell
   npm run deploy
   ```
* That will kick off the [GH-Action](https://github.com/MathewBiddle/globe/actions) to rebuild the webpage.

## To create the jpg images for the globe
* All images that are displayed on the map are found at https://github.com/MathewBiddle/gbif_globe/tree/main/images
* The Jupyter notebook [Create_species_map_from_OBIS_API.ipynb](https://github.com/MathewBiddle/globe/blob/main/Create_species_map_from_OBIS_API.ipynb) is used to create the images.
* All image file names must follow the url structure defined in [App.js](https://github.com/MathewBiddle/globe/blob/bfb6a119e4c619d175eaa0ccb9145563f7f330b5/src/App.js#L43). _Unless you change the App.js code._
* The images overlay on the globe and topography images with some level of opacity. It's best to do some dark background with your data image.
* The Rmarkdown file [use_parquet_file_for_globe.Rmd](https://github.com/MathewBiddle/globe/blob/main/use_parquet_file_for_globe.Rmd) is used to create the indicator images that are overlayed on the map.

### Some things to note about creating the jpg images for the globe:
* projection is [Plate Carree](https://pro.arcgis.com/en/pro-app/2.8/help/mapping/properties/plate-carree.htm) with a central longitude at 0.0.
* figure size is width=`160`, height=`80` in inches.


## To edit globe settings
* See <https://react-globe.netlify.app/>
* NavIcons come from <https://react-icons.github.io/react-icons>
* See <https://github.com/vasturiano/three-globe>
