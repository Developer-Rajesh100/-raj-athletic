import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container cont">
      <p className="firstQuestion">
        <strong>1) Authorization এবং Authentication এর মধ্যে পার্থক্য।</strong>
        <br />
        Answer ➤ ওয়েব পরিষেবা পরিকাঠামোর জন্য অত্যন্ত গুরুত্বপূর্ণ, বিশেষ করে
        যখন এটি একটি সিস্টেমে অ্যাক্সেস মঞ্জুর করার ক্ষেত্রে আসে, তখন নিরাপত্তার
        বিষয়ে প্রতিটি শব্দ বোঝার চাবিকাঠি। যদিও আমাদের মধ্যে বেশিরভাগই একটি
        শব্দকে অন্যটির সাথে বিভ্রান্ত করে, তাদের মধ্যে মূল পার্থক্য বোঝা
        গুরুত্বপূর্ণ যা আসলে খুব সহজ। যদি প্রমাণীকরণ হয় আপনি কে, অনুমোদন হল
        আপনি যা অ্যাক্সেস করতে এবং পরিবর্তন করতে পারেন৷ সহজ কথায়, প্রমাণীকরণ
        নির্ধারণ করছে যে কেউ সে যাকে বলে দাবি করে কিনা। অন্যদিকে, অনুমোদন, সম্পদ
        অ্যাক্সেস করার জন্য তার অধিকার নির্ধারণ করছে।
      </p>
      <p className="secondQuestion">
        <strong>
          2) আপনি ফায়ারবেস ব্যবহার করছেন কেন? Authentication জন্য আপনার কাছে
          অন্য কোন বিকল্প রয়েছে?
        </strong>
        <br />
        Answer ➤ আপনি যদি শেষ পর্যন্ত ক্লাউডে আপনার অ্যাপটি হোস্ট এবং পরিচালনা
        করতে চান তবে আপনি এই টুলটি ব্যবহার করার বিষয়েও বিবেচনা করতে পারেন।
        সার্ভারহীন হওয়ায়, ফায়ারবেস ক্লাউড সার্ভার কনফিগারেশনের প্রযুক্তিগত
        বিষয়ে চিন্তা করার প্রয়োজনীয়তা দূর করে। একটি Google ক্লাউড পরিষেবা
        হিসাবে, এটি আপনাকে Google ড্রাইভ এবং পত্রকের মতো অন্যান্য Google পণ্য
        এবং বৈশিষ্ট্যগুলিতে অ্যাক্সেস দেয়৷ উদাহরণস্বরূপ, আপনি Google পত্রক থেকে
        ডামি ডেটা আমদানি করতে পারেন এবং আপনার অ্যাপ পরিবেশন করতে অস্থায়ীভাবে
        এটি ব্যবহার করতে পারেন।
        <br />
        Answer ➤ Parse, Back4App, AWS Amplify, Kuzzle ইত্যাদি।
      </p>
      <p className="thirdQuestion">
        <strong>
          3) ফায়ারবেস Authentication ছাড়া অন্য কোন পরিষেবা প্রদান করে?
        </strong>
        <br />
        Answer ➤
        <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
