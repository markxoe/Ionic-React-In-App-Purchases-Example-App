import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonToast,
  IonItem,
  IonLabel,
  IonButton,
  IonProgressBar,
} from "@ionic/react";
import React, { useState } from "react";
import { InAppPurchase2, IAPProduct } from "@ionic-native/in-app-purchase-2";
const Home: React.FC = () => {
  const [toast, setToast] = useState(false);
  const [prod, setProd] = useState<IAPProduct>();
  const [loading, setLoading] = useState<boolean>(false);

  useIonViewWillEnter(() => {
    // On Init of the Page
    InAppPurchase2.register({
      id: "levell", // I typed it wrong in the Google Play Console ;-)
      alias: "level",
      type: InAppPurchase2.CONSUMABLE, // Can be bought multiple Times
    });

    InAppPurchase2.verbosity = InAppPurchase2.INFO;

    InAppPurchase2.error(function (error: any) {
      console.log("ERROR " + error.code + ": " + error.message);
    });

    InAppPurchase2.when("level").updated(setProd);
    InAppPurchase2.when("level").requested(() => setLoading(true));
    InAppPurchase2.when("level").finished(() => setLoading(false));
    InAppPurchase2.when("level").cancelled(() => setLoading(false));
    InAppPurchase2.when("level").invalid(() => setLoading(false));
    InAppPurchase2.when("level").error(() => setLoading(false));
    InAppPurchase2.when("level").valid(() => setLoading(false));

    InAppPurchase2.when("level").approved((p: IAPProduct) => {
      addLevel(); // Just for the Demo

      p.finish();

      setToast(false);
      setToast(true);
    });

    InAppPurchase2.refresh();
  });
  const addLevel = () => {
    console.log("The Level may now be higher");
    // Some Code that is executed everytime "level" is bought.
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Level Game</IonTitle>
          <IonProgressBar type="indeterminate" hidden={!loading} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Level Game</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Title:</IonLabel>
          {prod?.title ?? "Not Loaded yet"}
        </IonItem>
        <IonItem>
          <IonLabel>Price:</IonLabel>
          {prod?.price ?? "Not Loaded yet"}
        </IonItem>
        <IonItem>
          <IonLabel>Buy:</IonLabel>
          <IonButton onClick={() => InAppPurchase2.order("level")}>
            Kaufen
          </IonButton>
        </IonItem>
        <IonItem>
          <IonLabel>Restore Button:</IonLabel>
          <IonButton
            onClick={() => {
              InAppPurchase2.refresh();
              InAppPurchase2.get("level");
              setProd(InAppPurchase2.get("level"));
            }}
          >
            Restore
          </IonButton>
        </IonItem>
        <IonToast
          onDidDismiss={() => setToast(false)}
          isOpen={toast}
          message="Gekauft, Prost!"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
