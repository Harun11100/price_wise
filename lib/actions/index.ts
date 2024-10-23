'use server'

import { scrapedAmazonProducts } from "../Scraper";

export async function scrapeAndStoreProduct(productURL:string) {
       if(!productURL)return;
       try{

       
            const scrapedProduct=await scrapedAmazonProducts(productURL); 
       
      }catch(error:any){
            throw new Error(`fail to create/Update product:${error.message}`)

       }
      
}