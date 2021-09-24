

exports.HANDLE_POSTQUOTE_ON_TWITTER = async(Twitter,quote)=>{

  try {
    const tweet = {
        status: `${quote.text} \n\n- ${quote.author} \n\n#${quote.tag}`
    };


    await Twitter.post('statuses/update', tweet);

    console.log('Tweet posted.')
  } catch (error) {
      console.log(error)
  };

};