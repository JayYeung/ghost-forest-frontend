# Google Earth Engine Integration Guide

## Overview

This guide explains how to integrate Google Earth Engine with your Next.js application to display NDVI satellite imagery from the Hansen Global Forest Change dataset.

## Prerequisites

### 1. Google Earth Engine Account

-   Sign up for Google Earth Engine: https://earthengine.google.com/signup/
-   Wait for approval (usually 24-48 hours)
-   Enable the Earth Engine API in Google Cloud Console

### 2. Google Maps API Key

-   Get a Google Maps API key from: https://console.cloud.google.com/
-   Enable Maps JavaScript API
-   Enable Earth Engine API

## Implementation Options

### Option 1: Google Earth Engine JavaScript API (Recommended)

1. **Replace the placeholder in `NDVIMap.tsx`:**

    ```typescript
    // Replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key
    script.src =
        "https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY";
    ```

2. **Add environment variable:**
   Create `.env.local`:

    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
    ```

3. **Update the component to use environment variable:**
    ```typescript
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    ```

### Option 2: Earth Engine Code Editor Embed

1. **Create visualization in Earth Engine Code Editor:**

    ```javascript
    // Example Earth Engine script
    var hansen = ee.Image("UMD/hansen/global_forest_change_2023_v1_11");
    var nc = ee.Geometry.Rectangle([-84.5, 33.5, -75.0, 36.5]);

    var treeCover = hansen.select("treecover2020").clip(nc);
    var loss = hansen.select("loss").clip(nc);

    var visParams = {
        min: 0,
        max: 100,
        palette: ["red", "yellow", "green"],
    };

    Map.centerObject(nc, 7);
    Map.addLayer(treeCover, visParams, "Tree Cover 2020");
    Map.addLayer(loss, { palette: ["white", "red"] }, "Forest Loss");
    ```

2. **Export as web app and embed:**
    - Publish the script as a web app
    - Use the generated URL in an iframe

### Option 3: Static Image Export

1. **Export high-resolution images from Earth Engine:**

    ```javascript
    // Export tree cover visualization
    Export.image.toDrive({
        image: treeCover,
        description: "NC_TreeCover_2020",
        scale: 30,
        region: nc,
        maxPixels: 1e13,
    });
    ```

2. **Use exported images in your app:**
    - Download exported images
    - Host them on your server or CDN
    - Display with standard image components

## Current Implementation

The current implementation uses a placeholder component (`NDVIVisualization.tsx`) that shows:

-   Dataset information overlay
-   Color-coded legend
-   Professional styling

## Next Steps

1. **Choose your preferred implementation method**
2. **Set up API keys and authentication**
3. **Replace the placeholder with actual Earth Engine integration**
4. **Test the visualization with real data**

## Troubleshooting

### Common Issues:

-   **API key restrictions:** Ensure your API key allows your domain
-   **CORS issues:** Use proper domain restrictions in Google Cloud Console
-   **Authentication:** Make sure Earth Engine account is properly set up
-   **Rate limits:** Be aware of API usage limits

### Alternative Approaches:

-   **Server-side rendering:** Process Earth Engine data on the backend
-   **Static generation:** Pre-generate visualizations and serve as static assets
-   **Third-party services:** Use services like Mapbox or CARTO for satellite imagery

## Resources

-   [Google Earth Engine Documentation](https://developers.google.com/earth-engine)
-   [Earth Engine JavaScript API](https://developers.google.com/earth-engine/guides/javascript_api)
-   [Hansen Global Forest Change Dataset](https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2023_v1_11)
-   [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
