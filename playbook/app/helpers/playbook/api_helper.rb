# frozen_string_literal: true

module Playbook
  module ApiHelper
    def pb_avatar
      previous = prefix_partial_path_with_controller_namespace
      self.prefix_partial_path_with_controller_namespace = false
      kit = "Playbook::PbAvatar::Avatar"
      kit.safe_constantize.new({ image_url: "https://randomuser.me/api/portraits/men/44.jpg" })
      render(partial: kit, as: :object)
    ensure
      self.prefix_partial_path_with_controller_namespace = previous
    end
  end
end
