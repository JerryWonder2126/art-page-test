import {AzureService} from '../azure/azure.service';

export async function saveImage(image: any): Promise<string> {
  try {
    // const azureHook = await init();
    // const azureResponse = await azureHook.uploadToBlob(image);
    // return azureResponse.name as string;
    return image.name;
  } catch (err) {
    throw new Error(
      JSON.stringify({
        stack: `Image could not be uploaded, please try again.\n${err}`,
      })
    );
  }
}

export async function saveImageBatch(images: any[]): Promise<string[]> {
  try {
    // const imagesPromise: Promise<string>[] = [];
    // Object.keys(images).forEach((value, index) => imagesPromise.push(saveImage(images[index])));
    // const imagesName = await Promise.all(imagesPromise);
    // return Object.keys(images).map((value, index) => images[index].name);
    return images.map(image => image.name);
  } catch (err) {
    throw new Error(
      JSON.stringify({
        stack: `Images could not be uploaded, please try again.\n${err}`,
      })
    );
  }
}

async function init() {
  try {
    return await new AzureService('images', 'culdevtest');
  } catch (err) {
    throw new Error(
      JSON.stringify({
        stack: "Couldn't connect to Azure Server, please try again.",
      })
    );
  }
}
