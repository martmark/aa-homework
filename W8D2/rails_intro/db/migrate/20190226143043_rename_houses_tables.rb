class RenameHousesTables < ActiveRecord::Migration[5.2]
  def change
    rename_table :houses_tables, :houses
  end
end
