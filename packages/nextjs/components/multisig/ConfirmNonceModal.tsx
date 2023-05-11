export const ConfirmNonceModal = ({
  isModalOpen,
  setIsModalOpen,
  onSign,
  data,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  onSign: any;
  data: any;
}) => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal" className="modal-toggle" checked={isModalOpen} />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-warning">Warning !</h3>
          <div className="text-primary-focus">After updating the Nonce all signer need to sign again</div>

          <div className="modal-action">
            <button className="btn btn-sm btn-warning" onClick={() => onSign(data, false, true)}>
              Confirm
            </button>

            <button
              className="btn btn-sm btn-primary btn-outline shadow-none"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
