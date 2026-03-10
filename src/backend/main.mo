import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

actor {
  type Offer = {
    id : Nat;
    title : Text;
    description : Text;
    imageUrl : Text;
    link : Text;
    contactName : Text;
    createdAt : Time.Time;
  };

  let offers = List.empty<Offer>();
  var nextId = 0;

  public shared ({ caller }) func postOffer(title : Text, description : Text, imageUrl : Text, link : Text, contactName : Text) : async () {
    let offer : Offer = {
      id = nextId;
      title;
      description;
      imageUrl;
      link;
      contactName;
      createdAt = Time.now();
    };

    offers.add(offer);
    nextId += 1;
  };

  public query ({ caller }) func getOffers() : async [Offer] {
    offers.toArray();
  };
};
